import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp, MessageCircle } from "lucide-react";
import ReviewForm from "@/components/ReviewForm";

// Mock reviews data
const reviews = [
  {
    id: 1,
    user: "John Doe",
    rating: 5,
    date: "2024-03-15",
    title: "Excellent Product!",
    comment: "This is one of the best purchases I've made. The quality is outstanding and it exceeded my expectations.",
    helpful: 12,
    verified: true
  },
  {
    id: 2,
    user: "Jane Smith",
    rating: 4,
    date: "2024-03-14",
    title: "Great Value",
    comment: "Very good product for the price. The only minor issue is the battery life could be better.",
    helpful: 8,
    verified: false
  },
  {
    id: 3,
    user: "Mike R.",
    rating: 5,
    date: "2024-03-13",
    title: "Highly Recommended",
    comment: "Perfect fit and great sound quality. The noise cancellation feature works like a charm.",
    helpful: 15,
    verified: true
  }
];

const calculateAverageRating = () => {
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  return (totalRating / reviews.length).toFixed(1);
};

const getRatingDistribution = () => {
  const distribution = Array(5).fill(0);
  reviews.forEach(review => {
    distribution[review.rating - 1]++;
  });
  return distribution.reverse();
};

export default function ProductReviewsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Reviews Summary */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
              <CardDescription>
                Based on {reviews.length} reviews
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Average Rating */}
              <div className="text-center">
                <div className="text-4xl font-bold">{calculateAverageRating()}</div>
                <div className="flex justify-center mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.round(Number(calculateAverageRating()))
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2">
                {getRatingDistribution().map((count, index) => (
                  <div key={5 - index} className="flex items-center gap-2">
                    <span className="w-12 text-sm">{5 - index} stars</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400"
                        style={{
                          width: `${(count / reviews.length) * 100}%`
                        }}
                      />
                    </div>
                    <span className="w-8 text-sm text-muted-foreground">
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews List and Form */}
        <div className="md:col-span-2 space-y-6">
          {/* Write a Review */}
          <ReviewForm />

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{review.user}</span>
                        {review.verified && (
                          <Badge variant="secondary">Verified Purchase</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{review.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.comment}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Reply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Assuming you have a products array with ids
  const products = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    // Add more products here
  ];

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}