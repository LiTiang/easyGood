package com.easygood.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan({ "com.easygood.service" })
public class SpringRootConfig {
}