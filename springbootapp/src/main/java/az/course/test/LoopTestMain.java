package az.course.test;

import java.util.ArrayList;
import java.util.List;

public class LoopTestMain {
    public static void main(String[] args) {

        List<Integer> list = new ArrayList<>();
        list.add(3);
        list.add(4);

        for (int i = 1; i < list.size(); i++) {
            Integer a = list.get(i);
            System.out.println(a);
        }
    }
}
