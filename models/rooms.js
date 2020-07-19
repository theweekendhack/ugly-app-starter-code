    class Room
    {

        title;
       // descrption;
       // price;
        imgPath;
        //id;
        isTopRoom;

        constructor(img,title,isTopRoom=false)
        {
            this.title=title;
          //  this.id=id;
            //this.descrption=desc;
            //this.price= price;
            this.imgPath=img;
            this.isTopRoom=isTopRoom;
        }


    }

    const roomModel =
    {

        rooms : [], // This is the room table 

        init()
        { //  INSERT INTO DATA IN TO
            this.rooms.push(new Room("/img/room1.jpg","POS Netflix and Chilling Room"))
            this.rooms.push(new Room("/img/room2.jpg","Sando Love Making Room"))
            this.rooms.push(new Room("/img/room3.jpg","Tobago Room of Love",true))
            this.rooms.push(new Room("/img/room4.jpg","Room of Doom",true))
            this.rooms.push(new Room("/img/room5.jpg","Salt Room (You doh get nothing here)"))
            this.rooms.push(new Room("/img/room6.jpg","Baby Making"))

        },

        getAllRooms()
        {

            //SELECT * FROM  rooms
            return this.rooms;
        },


        getTopRooms()
        {

            //SELECT * FROM room where isToopRoom = true
            const topRooms = this.rooms.filter((room)=> room.isTopRoom == true)

            return topRooms;
        }

    }

    roomModel.init();

    console.log(roomModel.rooms);
    module.exports = roomModel;