'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var IoSocialDesignernews = function (_React$Component) {
    _inherits(IoSocialDesignernews, _React$Component);

    function IoSocialDesignernews() {
        _classCallCheck(this, IoSocialDesignernews);

        return _possibleConstructorReturn(this, (IoSocialDesignernews.__proto__ || Object.getPrototypeOf(IoSocialDesignernews)).apply(this, arguments));
    }

    _createClass(IoSocialDesignernews, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.2 11.3l0 4.2-5-8z m3-3.8l11.8 9.2v15.8h-19.4l-15.6-12.3h4.9c3.6 0 6-2.5 6-6.4 0-1.5-0.4-2.9-1.1-4l-0.3-0.2 2.9 2.3v8.3h3.1l-0.1-7.7 5 7.7h2.8v-12.7z m-15.5 6.4c0 2.2-1.1 3.4-3.2 3.4h-1.5v-6.9h1.5c2.1 0 3.2 1.2 3.2 3.5z' })
                )
            );
        }
    }]);

    return IoSocialDesignernews;
}(React.Component);

exports.default = IoSocialDesignernews;
module.exports = exports['default'];