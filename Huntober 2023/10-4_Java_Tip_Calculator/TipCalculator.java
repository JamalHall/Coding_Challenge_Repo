public class TipCalculator {
  public static void main(String[] args) {
    System.out.println(calculateTip(107.65, "great"));
  }

  public static Integer calculateTip(double amount, String rating) {
    rating = rating.toLowerCase();
    Double total = null;
    switch (rating) {
      case "terrible": {
        Double tip = 0.0;
        total = (amount * tip);
        break;
      }
      case "poor": {
        Double tip = .05;
        total = (amount * tip);
        break;
      }
      case "good": {
        Double tip = .1;
        total = (amount * tip);
        break;
      }
      case "great": {
        Double tip = .15;
        total = (amount * tip);
        break;
      }
      case "excellent": {
        Double tip = .2;
        total = (amount * tip);
        break;
      }
      default:
        return null;
      
    }
    return (int) Math.ceil(total);
  }
  
}