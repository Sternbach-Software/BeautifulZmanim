package com.kosherjava.zmanim.test.java.com.kosherjava.zmanim.hebrewcalendar;

import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.HebrewDateFormatter;
import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar;

import org.junit.*;

import junit.framework.TestCase;
public class UT_YerushalmiTest {
	private static com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.HebrewDateFormatter hdf = new HebrewDateFormatter();
	static {
		hdf.setHebrewFormat(true);		
	}
	 
	@Test
	public void testCorrectDaf1() {
		com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar jewishCalendar = new com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar(5777, com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar.ELUL,10);
		Assert.assertEquals(8, jewishCalendar.getDafYomiYerushalmi().getDaf());
		Assert.assertEquals(29, jewishCalendar.getDafYomiYerushalmi().getMasechtaNumber());
		System.out.println(hdf.formatDafYomiYerushalmi(jewishCalendar.getDafYomiYerushalmi()));
	}

	@Test
	public void testCorrectDaf2() {
		com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar jewishCalendar = new com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar(5744, com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar.KISLEV,1);
		Assert.assertEquals(26, jewishCalendar.getDafYomiYerushalmi().getDaf());
		Assert.assertEquals(32, jewishCalendar.getDafYomiYerushalmi().getMasechtaNumber());
		System.out.println(hdf.formatDafYomiYerushalmi(jewishCalendar.getDafYomiYerushalmi()));
	}
	
	@Test
	public void testCorrectDaf3() {
		com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar jewishCalendar = new com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar(5782, com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar.SIVAN,1);
		Assert.assertEquals(15, jewishCalendar.getDafYomiYerushalmi().getDaf());
		Assert.assertEquals(33, jewishCalendar.getDafYomiYerushalmi().getMasechtaNumber());
		System.out.println(hdf.formatDafYomiYerushalmi(jewishCalendar.getDafYomiYerushalmi()));
	}

	@Test
	public void testCorrectSpecialDate() {
		com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar jewishCalendar = new com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar(5775, com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar.TISHREI,10);
		Assert.assertNull(jewishCalendar.getDafYomiYerushalmi());
		System.out.println(hdf.formatDafYomiYerushalmi(jewishCalendar.getDafYomiYerushalmi()));
		
		jewishCalendar = new com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar(5783, com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar.AV,9);
		Assert.assertNull(jewishCalendar.getDafYomiYerushalmi());
		System.out.println(hdf.formatDafYomiYerushalmi(jewishCalendar.getDafYomiYerushalmi()));
		
		jewishCalendar = new com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishCalendar(5775, JewishCalendar.AV,10);// 9 Av delayed to Sunday 10 Av
		Assert.assertNull(jewishCalendar.getDafYomiYerushalmi());
		System.out.println(hdf.formatDafYomiYerushalmi(jewishCalendar.getDafYomiYerushalmi()));
	}

}
