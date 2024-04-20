import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class HelloWorld {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String phrase = in.nextLine();
        String code = in.nextLine();

        char[] codeArray=code.toCharArray();

        List<Character> result = new ArrayList<>();
        int curr_pos = -1;
        for (int i = 0; i < code.length(); i++) {
            if (codeArray[i] != '<') {
                if (curr_pos != result.size()-1) {
                    List<Character> inputA = new ArrayList<>();
                    List<Character> inputB = new ArrayList<>();
                    for (int k = 0; k < result.size(); k++) {
                        if (k <= curr_pos) {
                            inputA.add(result.get(k));
                        }
                        else {
                            inputB.add(result.get(k));
                        }
                    }
                    inputA.add(codeArray[i]);
                    //System.out.println(inputA);
                    //System.out.println(inputB);

                    for (int k = 0; k < inputB.size(); k++) {
                        inputA.add(inputB.get(k));
                    }
                    //System.out.println(inputA);
                    result = inputA;
                    curr_pos +=1;
                }
                else {
                    result.add(codeArray[i]);
                    curr_pos +=1;
                }
            }
            else if (codeArray[i+1] == 'l') {
                if (curr_pos != -1) {
                    curr_pos -= 1;
                }
                i+=5;
            }
            else if (codeArray[i+1] == 'r') {
                if (curr_pos != result.size()-1) {
                    curr_pos += 1;
                }
                i+=6;
            }
            else if (codeArray[i+1] == 'b') {
                System.out.println("b");
                System.out.println(result);
                System.out.println(curr_pos);
                if (curr_pos!= -1) {
                    result.remove(curr_pos);
                    curr_pos-=1;
                }
                i+=7;
            }
            else if (codeArray[i+1] == 'd') {
                System.out.println("d");
                System.out.println(result);
                System.out.println(curr_pos);
                if (!(curr_pos == result.size() - 1)) {
                    result.remove(curr_pos+1);
                }
                i+=7; //поза не должна поменяться если мы не в конце
            }
        }
        StringBuilder sb = new StringBuilder();
        for (Character chr : result) {
            sb.append(chr.toString());
            }
        String result_phrase = sb.toString();
        System.out.println(phrase);
        System.out.println(result_phrase);

        if (phrase.equals(result_phrase)) {
            System.out.println("Yes");
        }
        else {
            System.out.println("No");
        }

    }
}