"use client";

import React from 'react';
import Image from 'next/image';
import styles from './TestimonialsMarquee.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Ruiz',
    role: 'Aventurero',
    text: '¡Los Roques es el paraíso en la tierra! Nunca había visto aguas tan cristalinas. Me encantó la vibra y la atención.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 2,
    name: 'Sofía Méndez',
    role: 'Fotógrafa Turística',
    text: 'El Salto Ángel en persona es indescriptible. Una experiencia que te cambia la vida por completo. ¡Volveré seguro!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 3,
    name: 'Javier Colmenares',
    role: 'Foodie Viajero',
    text: 'La gastronomía en Mérida te abraza el alma. Una pisca andina calientita en la montaña es el mejor recuerdo.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 4,
    name: 'Valeria Orta',
    role: 'Turista Deportiva',
    text: 'Practicar Kitesurf en Playa El Yaque ha sido mi mejor experiencia. Vientos perfectos y una energía inigualable.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 5,
    name: 'Miguel Ángel',
    role: 'Explorador',
    text: 'Atravesar los Médanos de Coro al atardecer te hace sentir en otro planeta. La majestuosidad de Venezuela no tiene límites.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const TestimonialsMarquee = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Voces de nuestros viajeros</h2>
          <p className={styles.subtitle}>Descubre lo que enamoró a quienes ya vivieron la experiencia Venexplore.</p>
        </div>
      </div>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* We render the list twice to create an infinite loop effect */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className={styles.bubbleCard}>
              <div className={styles.bubbleText}>
                "{testimonial.text}"
              </div>
              <div className={styles.bubbleTail}></div>
              
              <div className={styles.authorInfo}>
                <div className={styles.avatarWrapper}>
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className={styles.avatar}
                    sizes="40px"
                  />
                </div>
                <div>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
