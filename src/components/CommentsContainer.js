import React from "react";
import userIcon from "../images/userIcon.png";
const CommentsContainer = () => {
const commentsData = [
  {
    id: 1,
    name: "Jimmy Kane",
    text: "Amazing video. Had a great time watching.",
    replies: [
      {
        id: 2,
        name: "Alice",
        text: "Totally agree, it was captivating!",
        replies: [
          {
            id: 3,
            name: "Bob",
            text: "Indeed! The production quality was top-notch.",
          },
          {
            id: 4,
            name: "Charlie",
            text: "I loved the storyline. Kept me engaged throughout.",
          },
        ],
      },
      {
        id: 5,
        name: "Bob",
        text: "The video was okay, but I've seen better.",
        replies: [
          {
            id: 6,
            name: "David",
            text: "I respect your opinion, but I thought it was fantastic.",
          },
          {
            id: 7,
            name: "Eve",
            text: "Different strokes for different folks, I guess!",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Alice",
    text: "It was a decent video. Not bad, not great.",
    replies: [
      {
        id: 9,
        name: "Frank",
        text: "I beg to differ, I thought it was outstanding!",
        replies: [
          {
            id: 10,
            name: "Grace",
            text: "I'm with Frank on this one. It was brilliant!",
          },
          {
            id: 11,
            name: "Henry",
            text: "I respect your opinion, but I wasn't impressed.",
          },
        ],
      },
      {
        id: 12,
        name: "Isabella",
        text: "I found it mediocre, to be honest.",
        replies: [
          {
            id: 13,
            name: "Jack",
            text: "I understand where you're coming from, Isabella.",
          },
          {
            id: 14,
            name: "Karen",
            text: "I disagree. I thought it was quite enjoyable.",
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: "John",
    text: "The video was entertaining, but it could've been better.",
    replies: [
      {
        id: 16,
        name: "Lucy",
        text: "I agree, John. It had its moments, though.",
      },
      {
        id: 17,
        name: "Mike",
        text: "I thought it was a bit too long, to be honest.",
        replies: [
          {
            id: 18,
            name: "Nancy",
            text: "I didn't mind the length. It kept me engaged.",
          },
          {
            id: 19,
            name: "Olivia",
            text: "I fell asleep halfway through. Not my cup of tea.",
          },
        ],
      },
    ],
  },
  {
    id: 20,
    name: "Peter",
    text: "The video didn't meet my expectations. Disappointing.",
    replies: [
      {
        id: 21,
        name: "Quinn",
        text: "Sorry to hear that, Peter. What were you expecting?",
      },
      {
        id: 22,
        name: "Rachel",
        text: "I had high hopes for it too, but it fell short for me as well.",
        replies: [
          {
            id: 23,
            name: "Sam",
            text: "I thought the ending was rushed. Could've been better.",
          },
          {
            id: 24,
            name: "Taylor",
            text: "I agree, Sam. The pacing felt off.",
          },
        ],
      },
    ],
  },
  {
    id: 25,
    name: "Victoria",
    text: "The video was phenomenal! Can't wait for the sequel.",
    replies: [
      {
        id: 26,
        name: "William",
        text: "I'm eagerly awaiting the sequel too, Victoria!",
      },
      {
        id: 27,
        name: "Xavier",
        text: "Agreed! The anticipation is killing me.",
        replies: [
          {
            id: 28,
            name: "Yvonne",
            text: "I hope they maintain the same level of quality in the sequel.",
          },
          {
            id: 29,
            name: "Zach",
            text: "Fingers crossed! Sequels can be hit or miss.",
          },
        ],
      },
    ],
  },
];

  return (
    <div className=" m-8">
      <h1 className="font-roboto font-bold text-lg"> Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};
const Comment = ({ data }) => (
  <div className="flex gap-2 bg-slate-50 my-2 px-4 ">
    <img src={userIcon} alt="user" className="w-8 h-8" />
    <div>
      <p className="font-roboto font-bold">{data.name}</p>
      <p> {data.text}</p>
    </div>
  </div>
);
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={comment.id || index}>
      <Comment key={comment.id} data={comment} />
      <div className="ml-4 border-l-2 border-black">
        {comment.replies && <CommentsList comments={comment.replies} />}
      </div>
    </div>
  ));
};

export default CommentsContainer;
