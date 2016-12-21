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

var IoSocialDesignernewsOutline = function (_React$Component) {
    _inherits(IoSocialDesignernewsOutline, _React$Component);

    function IoSocialDesignernewsOutline() {
        _classCallCheck(this, IoSocialDesignernewsOutline);

        return _possibleConstructorReturn(this, (IoSocialDesignernewsOutline.__proto__ || Object.getPrototypeOf(IoSocialDesignernewsOutline)).apply(this, arguments));
    }

    _createClass(IoSocialDesignernewsOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.2 11.4v4.1l-5-8z m3-3.9l11.8 9.3v15.7h-19.4l-15.6-12.2h4.9c3.6 0 6-2.6 6-6.4 0-1.6-0.4-2.9-1.1-4l-0.3-0.2 2.9 2.3v8.3h3.2l-0.1-7.6 4.9 7.6h2.8v-12.8z m10.6 23.8v-14l-9.3-7.1v-0.1 11.5h-4.8l-0.3-0.7-2.6-3.9 0.1 3.3v1.3h-5.7v-3.6c-0.3 0.5-0.6 1-1 1.4-0.6 0.7-1.4 1.2-2.3 1.6s-1.9 0.6-3 0.6h-1.2l12.4 9.7h17.6z m-29.2-19.6h-0.3v4.5h0.3c0.6 0 1-0.2 1.3-0.5 0.4-0.5 0.5-1.2 0.5-1.7 0-2-0.9-2.3-1.8-2.3z m0-1.2c2 0 3.1 1.2 3.1 3.5 0 2.2-1.1 3.4-3.2 3.4h-1.5v-6.9h1.6z' })
                )
            );
        }
    }]);

    return IoSocialDesignernewsOutline;
}(React.Component);

exports.default = IoSocialDesignernewsOutline;
module.exports = exports['default'];