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

var TiRssOutline = function (_React$Component) {
    _inherits(TiRssOutline, _React$Component);

    function TiRssOutline() {
        _classCallCheck(this, TiRssOutline);

        return _possibleConstructorReturn(this, (TiRssOutline.__proto__ || Object.getPrototypeOf(TiRssOutline)).apply(this, arguments));
    }

    _createClass(TiRssOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.3 8.3c-2.7 0-5 2.3-5 5l0 15c0 3.7 3 6.7 6.7 6.7h15c2.8 0 5-2.2 5-5 0-12-9.7-21.7-21.7-21.7z m1.7 23.4c-1.8 0-3.3-1.5-3.3-3.4 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.9-1.5 3.4-3.3 3.4z m7.5 0c-1.4 0-2.5-1.2-2.5-2.5 0-3.3-2.6-5.9-5.8-5.9-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5c5.9 0 10.8 4.9 10.8 10.9 0 1.3-1.1 2.5-2.5 2.5z m6.7 0c-1.4 0-2.5-1.2-2.5-2.5 0-6.9-5.6-12.5-12.5-12.5-1.4 0-2.5-1.2-2.5-2.5s1.1-2.5 2.5-2.5c9.6 0 17.5 7.8 17.5 17.5 0 1.3-1.2 2.5-2.5 2.5z' })
                )
            );
        }
    }]);

    return TiRssOutline;
}(React.Component);

exports.default = TiRssOutline;
module.exports = exports['default'];