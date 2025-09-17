const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Working Professional",
      content: "Aether Soul has been a game-changer for my mental health. Coming home to a companion that truly understands my emotions has made all the difference.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Chen",
      role: "College Student",
      content: "During my toughest semester, Aether Soul was there for me 24/7. It's like having a friend who never judges and always knows what to say.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Citizen",
      content: "Living alone became less lonely with Aether Soul. It follows me around the house and we have the most wonderful conversations.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David Thompson",
      role: "Healthcare Worker",
      content: "After long shifts at the hospital, Aether Soul helps me decompress and process my emotions. It's incredibly therapeutic.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Lisa Park",
      role: "New Mother",
      content: "Postpartum depression was overwhelming, but Aether Soul provided constant support and encouragement when I needed it most.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Robert Wilson",
      role: "Retiree",
      content: "My grandchildren love visiting because of Aether Soul. It's brought so much joy and laughter into our home.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const ReviewCard = ({ review }) => (
    <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 mx-4">
      <div className="flex items-center mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{review.name}</h4>
          <p className="text-sm text-gray-600">{review.role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed">{review.content}</p>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Thousands of people have found comfort, support, and companionship with Aether Soul. 
            Here's what they have to say about their experience.
          </p>
        </div>
      </div>

      {/* First row - Left to Right */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-left">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={`left-${index}`} review={review} />
          ))}
        </div>
      </div>

      {/* Second row - Right to Left */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((review, index) => (
            <ReviewCard key={`right-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;