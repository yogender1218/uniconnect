import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./CardSlider.module.css";



const ratingStar=[" ","⭐","⭐⭐","⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐⭐"];

const data = [
  {
    id: 1,
    name: "Aarav Verma",
    gmail: "aarav.verma@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=10",
    message:
      "The platform’s personalized mentorship and seamless networking tools have elevated my entrepreneurial journey beyond expectations.",
  },
  {
    id: 2,
    name: "Riya Singh",
    gmail: "riya.singh@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=20",
    message:
      "Pitching my startup idea and receiving real-time feedback from experienced mentors made the process smooth and insightful.",
  },
  {
    id: 3,
    name: "Kabir Kapoor",
    gmail: "kabir.kapoor@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=30",
    message:
      "From idea validation to team collaboration, this platform is a complete ecosystem for young innovators.",
  },
  {
    id: 4,
    name: "Anaya Sharma",
    gmail: "anaya.sharma@example.com",
    rating: ratingStar[3],
    avatar: "https://i.pravatar.cc/100?img=40",
    message:
      "Being able to connect with industry professionals and get their advice has given me clarity on my career path.",
  },
  {
    id: 5,
    name: "Vihaan Reddy",
    gmail: "vihaan.reddy@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=50",
    message:
      "The platform’s balance of learning resources, mentorship sessions, and community engagement is unmatched.",
  },
  {
    id: 6,
    name: "Meera Nair",
    gmail: "meera.nair@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=60",
    message:
      "I love how easily I could upload my pitch deck and gain visibility among potential investors.",
  },
  {
    id: 7,
    name: "Aarohi Patel",
    gmail: "aarohi.patel@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=14",
    message:
      "Joining interest-based groups helped me connect with like-minded peers and grow my network effectively.",
  },
  {
    id: 8,
    name: "Rohan Gupta",
    gmail: "rohan.gupta@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=23",
    message:
      "The voting feature for startup ideas gave me valuable insights into what the market actually values.",
  },
  {
    id: 9,
    name: "Priya Desai",
    gmail: "priya.desai@example.com",
    rating: ratingStar[3],
    avatar: "https://i.pravatar.cc/100?img=20",
    message:
      "Every session and interaction feels tailored towards fostering real innovation and leadership.",
  },
  {
    id: 10,
    name: "Siddharth Rao",
    gmail: "siddharth.rao@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=11",
    message:
      "This platform is a one-stop hub to sharpen skills, build connections, and bring startup ideas to life.",
  },
  {
    id: 11,
    name: "Kavya Iyer",
    gmail: "kavya.iyer@example.com",
    rating: ratingStar[4],
    avatar: "https://i.pravatar.cc/100?img=12",
    message:
      "Blending learning modules with real-world mentorship is what sets this apart from any other network.",
  },
  {
    id: 12,
    name: "Devansh Mehta",
    gmail: "devansh.mehta@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=13",
    message:
      "From webinars to investor meetups, every feature feels like a stepping stone toward startup success.",
  },
  {
    id: 13,
    name: "Nisha Kumar",
    gmail: "nisha.kumar@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=14",
    message:
      "It’s refreshing to be part of a community where education, networking, and idea growth happen hand-in-hand.",
  },
  {
    id: 14,
    name: "Rajesh Verma",
    gmail: "rajesh.verma@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=15",
    message:
      "Being able to access expert mentors and actionable insights has given my startup vision real direction.",
  },
  {
    id: 15,
    name: "Simran Kaur",
    gmail: "simran.kaur@example.com",
    rating: ratingStar[5],
    avatar: "https://i.pravatar.cc/100?img=16",
    message:
      "Each interaction on the platform feels like a guided step toward building something impactful.",
  },
];


export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <button onClick={prevSlide} className={styles.navButton}>◀</button>

      <div className={styles.slider}>
        <motion.div
          className={styles.sliderInner}
          animate={{ x: -currentIndex * 300 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardContent}>
                <img src={item.avatar} alt="avatar" className={styles.avatar} />
                <h3 className={styles.name}>{item.name}</h3>
                <h3 className={styles.rating}>{item.rating}</h3>
                <h5 className={styles.gmail}>{item.gmail}</h5>
                <p className={styles.message}>{item.message}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <button onClick={nextSlide} className={styles.navButton}>▶</button>
    </div>
  );
}
