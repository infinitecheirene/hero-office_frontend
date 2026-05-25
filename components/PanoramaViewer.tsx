"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const scenes = [
  {
    id: "lobby",
    name: "Main Lobby",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    hotspots: [
      { x: 30, y: 50, label: "Reception Desk" },
      { x: 70, y: 45, label: "Waiting Area" },
    ],
  },
  {
    id: "office",
    name: "Premium Office Suite",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80",
    hotspots: [
      { x: 25, y: 40, label: "Workstations" },
      { x: 75, y: 35, label: "City View" },
    ],
  },
  {
    id: "meeting",
    name: "Executive Boardroom",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1600&q=80",
    hotspots: [
      { x: 50, y: 40, label: "Video Wall" },
      { x: 30, y: 60, label: "Conference Table" },
    ],
  },
];

export default function PanoramaViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const currentScene = scenes[currentIndex];

  const nextScene = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % scenes.length);
  };

  const prevScene = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] bg-gray-900 rounded-2xl overflow-hidden">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4" />
            <p className="text-white">Loading 360° View...</p>
          </div>
        </div>
      )}

      {/* Scene Image */}
      <motion.div
        key={currentScene.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        className="absolute inset-0"
      >
        <img
          src={currentScene.image}
          alt={currentScene.name}
          className="w-full h-full object-cover"
          onLoad={() => setIsLoading(false)}
        />
      </motion.div>

      {/* Hotspots */}
      {!isLoading &&
        currentScene.hotspots.map((hotspot, i) => (
          <motion.button
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="absolute z-10 group"
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            onClick={() =>
              setSelectedHotspot(
                selectedHotspot === hotspot.label ? null : hotspot.label
              )
            }
          >
            <div className="relative">
              <div className="w-6 h-6 bg-white rounded-full animate-ping absolute" />
              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white relative" />
              {selectedHotspot === hotspot.label && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {hotspot.label}
                </div>
              )}
            </div>
          </motion.button>
        ))}

      {/* Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold text-lg">
              {currentScene.name}
            </h3>
            <p className="text-gray-400 text-sm">
              Scene {currentIndex + 1} of {scenes.length}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevScene}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextScene}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Scene Thumbnails */}
        <div className="flex gap-2 mt-4">
          {scenes.map((scene, i) => (
            <button
              key={scene.id}
              onClick={() => {
                setIsLoading(true);
                setCurrentIndex(i);
              }}
              className={`flex-1 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                i === currentIndex ? "border-blue-500" : "border-transparent"
              }`}
            >
              <img
                src={scene.image}
                alt={scene.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Top Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors">
          <Maximize2 className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
        <MapPin className="w-4 h-4 inline mr-1" />
        Click hotspots for details
      </div>
    </div>
  );
}
