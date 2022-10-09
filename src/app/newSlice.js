import { createSlice } from "@reduxjs/toolkit";

export const newSlice = createSlice({
  name: "state",
  initialState: {
    productsData: [
      {
        name: "بلوز بافت لاوان",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1665222570-EdHysG0SV9GC7tKj.jpg",
        price: "198,000",
        id: 1,
      },
      {
        name: "کت جین اسپرت 2",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1665215065-axMwwcjSK4Wzoj1s.jpg",
        price: "389,000",
        id: 2,
      },
      {
        name: "ژاکت بافت دوریس",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1665214594-w1oTEImnvaCxvrPp.jpg",
        price: "299,000",
        id: 3,
      },
      {
        name: "ست بلوز و شلوار ملورین 2",
        image:
          "https://ibolak.com/uploads/image/2022/9/optimized/1663567410-Up7CjfZIey7vak47.jpg",
        price: "379,000",
        id: 4,
      },
      {
        name: "پلیور یقه اسکی برشکا",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1664859891-86wLYSUVBiOGTHoS.jpg",
        price: "298,000",
        id: 5,
      },
      {
        name: "شلوار نایک رگه دوزی 4",
        image:
          "https://ibolak.com/uploads/image/2022/9/optimized/1664177832-cMNINcHlD2dVyZ1k.jpg",
        price: "169,000",
        id: 6,
      },
      {
        name: "بلوز کبریتی شانیا 3",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1664778024-43fus9sGhxEg3GyG.jpg",
        price: "179,000",
        id: 7,
      },
      {
        name: "سویشرت هپی 401150",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1664620638-AyPHWnLQfgsoPynC.jpg",
        price: "328,000",
        id: 8,
      },
      {
        name: "ست بافت آماندا",
        image:
          "https://ibolak.com/uploads/image/2022/9/optimized/1663738401-5ApPAoKNXWQq0FJA.jpg",
        price: "619,000",
        id: 9,
      },
      {
        name: "شکت بافرین",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1665044584-vE5N6b5Cnx6VAvxk.jpg",
        price: "479,000",
        id: 10,
      },
      {
        name: "بلوز بافت لاوان",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1665222570-EdHysG0SV9GC7tKj.jpg",
        price: "198,000",
        id: 11,
      },
      {
        name: "کت جین اسپرت 2",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1665215065-axMwwcjSK4Wzoj1s.jpg",
        price: "389,000",
        id: 12,
      },
      {
        name: "ژاکت بافت دوریس",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1665214594-w1oTEImnvaCxvrPp.jpg",
        price: "299,000",
        id: 13,
      },
      {
        name: "ست بلوز و شلوار ملورین 2",
        image:
          "https://ibolak.com/uploads/image/2022/9/optimized/1663567410-Up7CjfZIey7vak47.jpg",
        price: "379,000",
        id: 14,
      },
      {
        name: "پلیور یقه اسکی برشکا",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1664859891-86wLYSUVBiOGTHoS.jpg",
        price: "298,000",
        id: 15,
      },
      {
        name: "شلوار نایک رگه دوزی 4",
        image:
          "https://ibolak.com/uploads/image/2022/9/optimized/1664177832-cMNINcHlD2dVyZ1k.jpg",
        price: "169,000",
        id: 16,
      },
      {
        name: "بلوز کبریتی شانیا 3",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1664778024-43fus9sGhxEg3GyG.jpg",
        price: "179,000",
        id: 17,
      },
      {
        name: "سویشرت هپی 401150",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1664620638-AyPHWnLQfgsoPynC.jpg",
        price: "328,000",
        id: 18,
      },
      {
        name: "ست بافت آماندا",
        image:
          "https://ibolak.com/uploads/image/2022/9/optimized/1663738401-5ApPAoKNXWQq0FJA.jpg",
        price: "619,000",
        id: 19,
      },
      {
        name: "شکت بافرین",
        image:
          "https://ibolak.com/uploads/image/2022/10/optimized/1665044584-vE5N6b5Cnx6VAvxk.jpg",
        price: "479,000",
        id: 20,
      },
    ],
  },
  reducers: {},
});

// export const {} = newSlice.actions;
export default newSlice.reducer;
