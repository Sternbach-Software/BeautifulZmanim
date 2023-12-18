package com.kosherjava.zmanim.test.java.com.kosherjava.zmanim.hebrewcalendar;

import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.ComplexZmanimCalendar;
import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar;
import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishDate;
import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.util.GeoLocation;

import java.time.LocalDate;
import java.util.TimeZone;

public class RegressionTest {
    public static void main(String[] args) {
        //generates file
        System.out.println("Hello!");
        LocalDate start = LocalDate.MIN;
        LocalDate end = LocalDate.MAX;
        LocalDate current = start;
        com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar cal = new JewishCalendar(current);
        com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishDate date = new JewishDate(current);
        ComplexZmanimCalendar zcal = new ComplexZmanimCalendar(
                new GeoLocation(
                        "Lakewood, NJ",
                        40.096,
                        -74.222,
                        29.02,
                        TimeZone.getTimeZone("America/New_York")
                )
        );
        while (current.isBefore(end)) {
            //TODO work in progress:
            cal.getYomTovIndex();
            cal.getInIsrael();
            cal.getDafYomiYerushalmi();
            cal.getTekufasTishreiElapsedDays();
            cal.getDafYomiYerushalmi();
            cal.getMoladAsDate();
            cal.getMolad();
            cal.isUseModernHolidays();
            cal.isRoshChodesh();
            cal.getParshah();
            cal.getDafYomiBavli();
            cal.getTchilasZmanKidushLevana3Days();
            cal.isChanukah();
            cal.isErevYomTov();
            cal.isTaanis();
            cal.getDayOfChanukah();
            cal.getDayOfOmer();
            cal.getSofZmanKidushLevana15Days();
            cal.getSofZmanKidushLevanaBetweenMoldos();
            cal.getTchilasZmanKidushLevana7Days();
            cal.getSpecialShabbos();
            cal.hasCandleLighting();
            cal.isAssurBemelacha();
            cal.isCholHamoedPesach();
            cal.isCholHamoed();
            cal.isCholHamoedSuccos();
            cal.isErevYomTovSheni();
            cal.isIsruChag();
            cal.isPesach();
            cal.isPurim();
            cal.isRoshHashana();
            cal.isShminiAtzeres();
            cal.isShavuos();
            cal.isSimchasTorah();
            cal.isSuccos();
            cal.isTomorrowShabbosOrYomTov();
            cal.isYomKippur();
            cal.isYomTov();
            cal.isYomTovAssurBemelacha();
            cal.getIsMukafChoma();
            cal.getUpcomingParshah();
            cal.isAseresYemeiTeshuva();
            cal.isBeHaB();
            cal.isBirkasHachamah();


            cal.isUseModernHolidays();
//            cal.setUseModernHolidays();
//            cal.setInIsrael();
            cal.getInIsrael();
            cal.getIsMukafChoma();
//            cal.setIsMukafChoma();
            cal.isBirkasHachamah();
            cal.getParshah();
            cal.getUpcomingParshah();
            cal.getSpecialShabbos();
            cal.getYomTovIndex();
            cal.isYomTov();
            cal.isYomTovAssurBemelacha();
            cal.isAssurBemelacha();
            cal.hasCandleLighting();
            cal.isTomorrowShabbosOrYomTov();
            cal.isErevYomTovSheni();
            cal.isAseresYemeiTeshuva();
            cal.isPesach();
            cal.isCholHamoedPesach();
            cal.isShavuos();
            cal.isRoshHashana();
            cal.isYomKippur();
            cal.isSuccos();
            cal.isHoshanaRabba();
            cal.isShminiAtzeres();
            cal.isSimchasTorah();
            cal.isCholHamoedSuccos();
            cal.isCholHamoed();
            cal.isErevYomTov();
            cal.isErevRoshChodesh();
            cal.isYomKippurKatan();
            cal.isBeHaB();
            cal.isTaanis();
            cal.isTaanisBechoros();
            cal.getDayOfChanukah();
            cal.isChanukah();
            cal.isPurim();
            cal.isRoshChodesh();
            cal.isMacharChodesh();
            cal.isShabbosMevorchim();
            cal.getDayOfOmer();
            cal.isTishaBav();
            cal.getMoladAsDate();
            cal.getTchilasZmanKidushLevana3Days();
            cal.getTchilasZmanKidushLevana7Days();
            cal.getSofZmanKidushLevanaBetweenMoldos();
            cal.getSofZmanKidushLevana15Days();
            cal.getDafYomiBavli();
            cal.getDafYomiYerushalmi();
            cal.getTekufasTishreiElapsedDays();
            cal.isVeseinTalUmatarStartDate();
            cal.isVeseinTalUmatarStartingTonight();
            cal.isVeseinTalUmatarRecited();
            cal.isVeseinBerachaRecited();
            cal.isMashivHaruachStartDate();
            cal.isMashivHaruachEndDate();
            cal.isMashivHaruachRecited();
            cal.isMoridHatalRecited();
            cal.isIsruChag();
//            cal.equals();
            cal.hashCode();
            current = current.plusDays(1L);
        }
    }

    class FullCalendar {
        public FullCalendar(
                LocalDate date,
                int yomTovIndex
                ) {

        }
    }
}
