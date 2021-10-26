package com.company;
//https://edabit.com/challenge/GBKphScsmDi9ek3ra

public class vowelCount {

    public static int getCount(String str) {
        int vowelsCount = 0;

        String[] stringArr = new String[str.length()];

        for (int i = 0; i < str.length(); i++) {
            stringArr[i] = str.substring(i, i + 1);
        }

        for (int i = 0; i < stringArr.length; i++) {
            //System.out.println(stringArr[i]);
            if (stringArr[i].equalsIgnoreCase("a") || stringArr[i].equalsIgnoreCase("e") || stringArr[i].equalsIgnoreCase("i") || stringArr[i].equalsIgnoreCase("o") || stringArr[i].equalsIgnoreCase("u")){
                vowelsCount++;
            }
        }

        return vowelsCount;
    }


    public static void main(String[] args) {
        System.out.println(getCount("Amazing"));
    }

}
