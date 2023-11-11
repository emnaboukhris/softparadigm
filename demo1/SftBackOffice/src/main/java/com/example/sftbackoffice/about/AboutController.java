package com.example.sftbackoffice.about;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AboutController {
    @Autowired
    private AboutRepository aboutRepository;

    @RequestMapping("/create")
    public String create(Model model) {
        return "create";
    }

    /**
     * @param aboutTitle
     * @param aboutTextLeft
     * @param aboutTextRight
     * @return
     */
    @RequestMapping("/save")
    public String save(@RequestParam String aboutTitle, @RequestParam String aboutTextLeft, @RequestParam String aboutTextRight) {
        About about = new About();
        about.title = aboutTitle ;
        about.leftText = aboutTextLeft ;
        about.rightText =aboutTextRight ;
        aboutRepository.save(about);

        return "about Added successfully";
    }

    @RequestMapping("/update")
    public String update(@RequestParam Long id,@RequestParam String aboutTitle, @RequestParam String aboutTextLeft, @RequestParam String aboutTextRight , ) {
        About about = About.findById(id).orElse(null);
        about.title = aboutTitle ;
        about.leftText = aboutTextLeft ;
        about.rightText =aboutTextRight ;
        aboutRepository.save(about);

        return "about updeted";
    }


}
