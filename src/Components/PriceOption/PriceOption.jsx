import PriceOptionSingel from "../PriceOptionSingel/PriceOptionSingel";


const PriceOption = () => {
    const priceOption = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "29.99",
          "features": [
            "Access to gym facilities",
            "Use of cardio equipment",
            "Locker room access",
            "Monthly fitness assessment"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "49.99",
          "features": [
            "Access to gym facilities",
            "Use of cardio and strength equipment",
            "Locker room access",
            "Monthly fitness assessment",
            "Unlimited group fitness classes",
            "Personal trainer consultation (once a month)"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": "79.99",
          "features": [
            "Access to gym facilities for 2 adults and 2 children",
            "Use of cardio and strength equipment",
            "Locker room access",
            "Monthly fitness assessment for all members",
            "Unlimited group fitness classes for all members",
            "Family fitness sessions (once a week)"
          ]
        }
      ]
    return (
        <div className="m-12">
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOption.map(option => <PriceOptionSingel key={option.id} option={option}></PriceOptionSingel>)
            }
            </div>
            
        </div>
    );
};

export default PriceOption;