export const PropertyDescription = () => {
  return (
    <div className="bg-card rounded-xl p-6 md:p-8 shadow-card-elegant">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        Property Description
      </h2>

      <div className="prose prose-lg max-w-none">
        <p className="text-luxury-gray leading-relaxed mb-4">
          Discover luxury living at its finest in this stunning modern villa
          nestled in the prestigious Beverly Hills neighborhood. This
          architectural masterpiece seamlessly blends contemporary design with
          timeless elegance, offering an unparalleled living experience.
        </p>

        <p className="text-luxury-gray leading-relaxed mb-4">
          The open-concept floor plan features soaring ceilings,
          floor-to-ceiling windows, and premium finishes throughout. The gourmet
          kitchen boasts top-of-the-line appliances, marble countertops, and a
          spacious island perfect for entertaining.
        </p>

        <p className="text-luxury-gray leading-relaxed mb-6">
          The master suite serves as a private retreat with a spa-like ensuite
          bathroom, walk-in closet, and private balcony overlooking the
          meticulously landscaped grounds. Additional bedrooms are generously
          sized and feature ensuite bathrooms and ample natural light.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Interior Highlights
            </h3>
            <ul className="space-y-2 text-luxury-gray">
              <li>• Hardwood floors throughout</li>
              <li>• Smart home automation system</li>
              <li>• Custom built-in storage</li>
              <li>• Wine cellar and tasting room</li>
              <li>• Home theater with surround sound</li>
              <li>• Office/study with built-in shelving</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Exterior Features
            </h3>
            <ul className="space-y-2 text-luxury-gray">
              <li>• Resort-style swimming pool and spa</li>
              <li>• Outdoor kitchen and dining area</li>
              <li>• Professionally landscaped gardens</li>
              <li>• Multiple outdoor entertainment spaces</li>
              <li>• Three-car garage with EV charging</li>
              <li>• Gated entrance with security system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
