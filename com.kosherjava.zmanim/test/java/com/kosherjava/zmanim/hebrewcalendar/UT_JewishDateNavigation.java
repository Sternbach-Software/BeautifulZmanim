/*
 * Copyright (c) 2011. Jay R. Gindin
 */

package com.kosherjava.zmanim.test.java.com.kosherjava.zmanim.hebrewcalendar;

import com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishDate;

import org.junit.*;

/**
 *
 */
@SuppressWarnings({ "MagicNumber" })
public class UT_JewishDateNavigation {


	@Test
	public void jewishForwardMonthToMonth() {

		com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishDate jewishDate = new com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishDate();
		jewishDate.setJewishDate(5771, 1, 1);
		Assert.assertEquals(5, jewishDate.getGregorianDayOfMonth());
		Assert.assertEquals(3, jewishDate.getGregorianMonth());
		Assert.assertEquals(2011, jewishDate.getGregorianYear());
	}


	@Test
	public void computeRoshHashana5771() {

		// At one point, this test was failing as the JewishDate class spun through a never-ending loop...

		com.kosherjava.zmanim.main.java.com.kosherjava.zmanim.hebrewcalendar.JewishDate jewishDate = new JewishDate();
		jewishDate.setJewishDate(5771, 7, 1);
		Assert.assertEquals(9, jewishDate.getGregorianDayOfMonth());
		Assert.assertEquals(8, jewishDate.getGregorianMonth());
		Assert.assertEquals(2010, jewishDate.getGregorianYear());
	}


} // End of UT_JewishDateNavigation class
