"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ReviewForm() {
  const { toast } = useToast();
  const [newReview, setNewReview] = useState({
    rating: 0,
    title: "",
    comment: "",
  });

  const handleRatingClick = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback!",
    });
    setNewReview({ rating: 0, title: "", comment: "" });
  };

  return (
    <Card className="w-full flex flex-col ">
      <CardHeader>
        <CardTitle>Write a Review</CardTitle>
        <CardDescription>
          Share your experience with this product
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmitReview}>
        <CardContent className="space-y-4">
          <div className="flex flex-col w-full">
            <Label>Rating</Label>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= newReview.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="title">Review Title</Label>
            <input
              id="title"
              className="w-full mt-2 p-2 border rounded-md"
              value={newReview.title}
              onChange={(e) =>
                setNewReview((prev) => ({ ...prev, title: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <Label htmlFor="comment">Your Review</Label>
            <Textarea
              id="comment"
              className="mt-2"
              rows={4}
              value={newReview.comment}
              onChange={(e) =>
                setNewReview((prev) => ({ ...prev, comment: e.target.value }))
              }
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Submit Review</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
