class Room {
    constructor(public x: number, public y: number, public width: number, public height: number) { }

    get centerX(): number {
        return this.x + Math.floor(this.width / 2);
    }

    get centerY(): number {
        return this.y + Math.floor(this.height / 2);
    }
}

export class GameMap {
    private map: number[][] = Array(30).fill(0).map(() => Array(30).fill(0));
    private rooms: Room[] = [];

    constructor(private roomCount: number) {
        this.splitSpace(new Room(0, 0, 30, 30));
        this.createRooms();
        this.connectRooms();
    }

    private splitSpace(room: Room): void {
        // Simple space splitting algorithm: split the room into four equal parts
        const halfWidth = Math.floor(room.width / 2);
        const halfHeight = Math.floor(room.height / 2);
        this.rooms.push(new Room(room.x, room.y, halfWidth, halfHeight));
        this.rooms.push(new Room(room.x + halfWidth, room.y, halfWidth, halfHeight));
        this.rooms.push(new Room(room.x, room.y + halfHeight, halfWidth, halfHeight));
        this.rooms.push(new Room(room.x + halfWidth, room.y + halfHeight, halfWidth, halfHeight));
    }

    private createRooms(): void {
        // Simple room creation algorithm: create a room in the center of each space
        for (const room of this.rooms) {
            const roomWidth = Math.max(1, Math.floor(room.width / 2));
            const roomHeight = Math.max(1, Math.floor(room.height / 2));
            const roomX = room.x + Math.floor((room.width - roomWidth) / 2);
            const roomY = room.y + Math.floor((room.height - roomHeight) / 2);
            for (let y = roomY; y < roomY + roomHeight; y++) {
                for (let x = roomX; x < roomX + roomWidth; x++) {
                    this.map[y][x] = 1;  // 1 represents a room
                }
            }
        }
    }

    private connectRooms(): void {
        // Simple room connection algorithm: connect each room to its right and bottom neighbor
        for (const room of this.rooms) {
            const rightNeighbor = this.rooms.find(r => r.x === room.x + room.width && r.y === room.y);
            const bottomNeighbor = this.rooms.find(r => r.y === room.y + room.height && r.x === room.x);
            if (rightNeighbor) {
                for (let y = room.y; y < room.y + room.height; y++) {
                    this.map[y][room.x + room.width] = 1;  // 1 represents a room
                }
            }
            if (bottomNeighbor) {
                for (let x = room.x; x < room.x + room.width; x++) {
                    this.map[room.y + room.height][x] = 1;  // 1 represents a room
                }
            }
        }
    }

    private distance(roomA: Room, roomB: Room): number {
        const dx = roomA.centerX - roomB.centerX;
        const dy = roomA.centerY - roomB.centerY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    private connect(roomA: Room, roomB: Room): void {
        // Simple room connection algorithm: create a straight line between the centers of the rooms
        const dx = roomB.centerX - roomA.centerX;
        const dy = roomB.centerY - roomA.centerY;
        for (let x = roomA.centerX; x !== roomB.centerX; x += Math.sign(dx)) {
            this.map[roomA.centerY][x] = 1;  // 1 represents a room
        }
        for (let y = roomA.centerY; y !== roomB.centerY; y += Math.sign(dy)) {
            this.map[y][roomB.centerX] = 1;  // 1 represents a room
        }
    }

    public generate(): void {
        // Clear the map
        this.map = Array(30).fill(0).map(() => Array(30).fill(0));
        // Generate the rooms
        this.splitSpace(new Room(0, 0, 30, 30));
        this.createRooms();
        this.connectRooms();
    }

    getMap(): number[][] {
        return this.map;
    }
}
