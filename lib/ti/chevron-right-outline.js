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

var TiChevronRightOutline = function (_React$Component) {
    _inherits(TiChevronRightOutline, _React$Component);

    function TiChevronRightOutline() {
        _classCallCheck(this, TiChevronRightOutline);

        return _possibleConstructorReturn(this, (TiChevronRightOutline.__proto__ || Object.getPrototypeOf(TiChevronRightOutline)).apply(this, arguments));
    }

    _createClass(TiChevronRightOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.7 33.3c-1.4 0-2.6-0.5-3.6-1.4-0.9-1-1.4-2.2-1.4-3.6s0.5-2.6 1.4-3.5l4.8-4.8-4.8-4.8c-0.9-0.9-1.4-2.2-1.4-3.5s0.5-2.6 1.4-3.6c1.9-1.9 5.2-1.9 7.1 0l11.9 11.9-11.9 11.9c-0.9 0.9-2.2 1.4-3.5 1.4z m0-23.3c-0.5 0-0.9 0.2-1.2 0.5-0.3 0.3-0.5 0.7-0.5 1.2s0.2 0.8 0.5 1.1l7.1 7.2-7.1 7.2c-0.3 0.3-0.5 0.7-0.5 1.1s0.2 0.9 0.5 1.2c0.6 0.6 1.7 0.6 2.3 0l9.6-9.5-9.6-9.5c-0.3-0.3-0.7-0.5-1.1-0.5z' })
                )
            );
        }
    }]);

    return TiChevronRightOutline;
}(React.Component);

exports.default = TiChevronRightOutline;
module.exports = exports['default'];