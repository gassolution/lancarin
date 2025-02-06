import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";

interface CardData {
    id: number;
    url: string;
}

interface CardProps extends CardData {
    setCards: React.Dispatch<React.SetStateAction<CardData[]>>;
    cards: CardData[];
}

const SwipeCards: React.FC = () => {
    const [cards, setCards] = useState<CardData[]>(cardData);

    return (
        <div
            className="grid h-[500px] w-full place-items-center"
        >
            {cards.map((card) => (
                <Card key={card.id} cards={cards} setCards={setCards} {...card} />
            ))}
        </div>
    );
};

const Card: React.FC<CardProps> = ({ id, url, setCards, cards }) => {
    const x = useMotionValue(0);
    const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
    const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
    const isFront = id === cards[cards.length - 1]?.id;

    const rotate = useTransform(() => {
        const offset = isFront ? 0 : id % 2 ? 6 : -6;
        return `${rotateRaw.get() + offset}deg`;
    });

    const handleDragEnd = () => {
        if (Math.abs(x.get()) > 100) {
            setCards((prev) => prev.filter((card) => card.id !== id));
        }
    };

    return (
        <motion.img
            src={url}
            alt="Card Image"
            className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
            style={{
                gridRow: 1,
                gridColumn: 1,
                x,
                opacity,
                rotate,
                transition: "0.125s transform",
                boxShadow: isFront
                    ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
                    : undefined,
            }}
            animate={{
                scale: isFront ? 1 : 0.98,
            }}
            drag={isFront ? "x" : false}
            dragConstraints={{
                left: 0,
                right: 0,
            }}
            onDragEnd={handleDragEnd}
        />
    );
};

export default SwipeCards;

const cardData: CardData[] = [
    { id: 1, url: "/images/onfield-2.jpg" },
    { id: 2, url: "/images/onfield-3.jpg" },
    { id: 3, url: "/images/onfield-4.jpg" },
    { id: 4, url: "/images/onfield-5.jpg" },
    { id: 5, url: "/images/acmaintenance.jpg" },
    { id: 6, url: "/images/greasetrap.jpg" },
    { id: 7, url: "/images/saluranair.jpg" },
    { id: 8, url: "/images/onfield-1.jpg" },
];
