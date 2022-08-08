package az.course.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfiguration {

    @Bean("courseAppDatasource")
    @Primary
    @ConfigurationProperties(prefix = "spring.datasource.courseappdatasource")
    public DataSource firstAppDatasource() {
        return DataSourceBuilder.create().build();
    }
}
