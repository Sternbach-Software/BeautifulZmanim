package com.kosherjava.zmanim.test.java.com.kosherjava.zmanim.hebrewcalendar;

import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.Daf;
import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.HebrewDateFormatter;
import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar;
import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishDate;
import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.YomiCalculator;

import org.junit.Assert;
import org.junit.Test;

public class YomiCalculatorTest {
	private static com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.HebrewDateFormatter hdf = new HebrewDateFormatter();
	static {
		hdf.setHebrewFormat(true);		
	}
	 
	@Test
	public void testCorrectDaf1() {
		com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar jewishCalendar = new com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar(5685, com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishDate.KISLEV, 12);
		com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.Daf daf = com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.YomiCalculator.getDafYomiBavli(jewishCalendar);
		Assert.assertEquals(5, daf.getMasechtaNumber());
		Assert.assertEquals(2, daf.getDaf());
		System.out.println(hdf.formatDafYomiBavli(jewishCalendar.getDafYomiBavli()));
	}

	@Test
	public void testCorrectDaf2() {
		com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar jewishCalendar = new com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar(5736, com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishDate.ELUL, 26);
		com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.Daf daf = com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.YomiCalculator.getDafYomiBavli(jewishCalendar);
		Assert.assertEquals(4, daf.getMasechtaNumber());
		Assert.assertEquals(14, daf.getDaf());
		System.out.println(hdf.formatDafYomiBavli(jewishCalendar.getDafYomiBavli()));
	}
	
	@Test
	public void testCorrectDaf3() {
		com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar jewishCalendar = new JewishCalendar(5777, JewishDate.ELUL, 10);
		Daf daf = YomiCalculator.getDafYomiBavli(jewishCalendar);
		Assert.assertEquals(23, daf.getMasechtaNumber());
		Assert.assertEquals(47, daf.getDaf());
		System.out.println(hdf.formatDafYomiBavli(jewishCalendar.getDafYomiBavli()));
	}
}
