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

var TiStarOutline = function (_React$Component) {
    _inherits(TiStarOutline, _React$Component);

    function TiStarOutline() {
        _classCallCheck(this, TiStarOutline);

        return _possibleConstructorReturn(this, (TiStarOutline.__proto__ || Object.getPrototypeOf(TiStarOutline)).apply(this, arguments));
    }

    _createClass(TiStarOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.1 34.9c-0.4 0-0.7 0-1.1-0.2 0 0-0.1-0.1-0.2-0.1l-6.8-3.9-6.8 3.9c-0.1 0-0.2 0.1-0.2 0.1-0.8 0.4-1.8 0.3-2.6-0.2-0.7-0.6-1.1-1.6-0.9-2.5l1.6-7.8-2.7-2.4-3.2-2.9c0 0-0.1-0.1-0.1-0.1-0.6-0.7-0.8-1.6-0.6-2.5 0.3-0.9 1.1-1.5 2-1.7 0 0 0.1 0 0.1 0l7.9-0.9 3.2-7.2c0 0 0.1-0.1 0.1-0.2 0.5-0.7 1.3-1.2 2.2-1.2 0.9 0 1.7 0.5 2.2 1.2 0 0.1 0 0.2 0.1 0.2l3.2 7.2 7.9 0.9c0 0 0.1 0 0.1 0 0.9 0.2 1.7 0.8 2 1.7 0.2 0.9 0 1.8-0.6 2.5 0 0-0.1 0.1-0.1 0.1l-5.9 5.3 1.6 7.7c0.2 1-0.2 2-0.9 2.6-0.5 0.3-1 0.4-1.5 0.4z m-13.6-10.9c-0.1 0.3-0.8 3.7-1.4 6.8l6.1-3.5c0.5-0.2 1.1-0.2 1.6 0l6.1 3.5-1.4-6.8c-0.1-0.6 0.1-1.2 0.5-1.6l5.2-4.7-7-0.8c-0.6 0-1.1-0.4-1.3-1l-2.9-6.3-2.9 6.3c-0.2 0.6-0.7 1-1.3 1l-7 0.8 5.2 4.7c0.5 0.4 0.6 1 0.5 1.6z' })
                )
            );
        }
    }]);

    return TiStarOutline;
}(React.Component);

exports.default = TiStarOutline;
module.exports = exports['default'];