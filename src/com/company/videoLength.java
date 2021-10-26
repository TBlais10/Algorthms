package com.company;
//https://edabit.com/challenge/9D39q2q9yAFCDM9da

public class videoLength {

    public static int minutesToSeconds(String tm) {

        if(tm.length() == 1)
            return tm.charAt(0) - 48;
        return tm.charAt(0) - 48 + minutesToSeconds(tm.substring(1, tm.length()));


        //return tm;
    }

    public static void main(String[] args) {
        System.out.println(minutesToSeconds("10:30"));
    }

}
