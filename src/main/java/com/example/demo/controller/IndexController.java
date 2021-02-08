package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
/**
 * ClassName IndexController
 * Author    MxRanger
 * Date      2021/2/8
 * Time      11:32
 */

@Controller
public class IndexController {

    @GetMapping("/page")
    public String page() {
        // back前面不写 斜杠
        System.out.println("into index ...");
        return "index";
    }
}