import java.util.List;
import java.util.ArrayList;

public class FilterKata {
  public static void main(String[] args) {
    List<Object> inputList = new ArrayList<>();
    inputList.add("String 1");
    inputList.add(42);
    inputList.add("String 2");
    inputList.add(99);
    filterList(inputList);
}

  public static List<Object> filterList(List<Object> list) {
    List<Object> filteredList = new ArrayList<Object>();
    for (Object item : list) {
      if (!(item instanceof String)) {
        filteredList.add(item);
      }
    }
    System.out.println(filteredList);
    return filteredList;
  }
  
}