"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const PHOTOS = [
  "/193576351_111199977835788_7236715514882148363_n.jpg",
  "/468358154_874160801539698_8034201561199308748_n.jpg",
  "/470212576_885972083691903_333170140043904055_n.jpg",
  "/471151824_886242170347736_2320801605946304729_n.jpg",
  "/471173982_890856676536777_8821864839160866793_n.jpg",
  "/472751969_903655438590234_3423601555640289586_n.jpg",
  "/473095822_903047578651020_2986316074479866709_n.jpg",
  "/473283654_903655311923580_8459094752069935572_n.jpg",
  "/473885044_909622591326852_9069517055179618664_n.jpg",
  "/558358670_10172804311715486_539484865623809195_n.jpg",
  "/white-kitchen-ushaped.jpg",
];

export default function RandomPhoto({ className }: { className?: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    setSrc(PHOTOS[Math.floor(Math.random() * PHOTOS.length)]);
  }, []);

  if (!src) return null;

  return (
    <Image
      src={src}
      alt="Dream Clean Shine — professional cleaning work"
      fill
      sizes="(max-width:1024px) 100vw, 50vw"
      className={className ?? "object-cover object-top"}
    />
  );
}
