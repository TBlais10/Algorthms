package com.company;

public class reverseNumber {

    public static String rev(int n) {
        int newNumber = 0;
        String answer = "";

        if (n < 0){
            n *= -1;
        }

        while (n != 0){
            int d = n % 10;
            newNumber = newNumber * 10 + d;
            n /= 10;
            //System.out.println(n);
        }

        answer += newNumber;

        //System.out.println(newNumber);
        //System.out.println(answer +  " The string");

        return answer;
    }

    public static void main(String[] args) {
        rev(-12345);
    }

}
