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

var TiDivideOutline = function (_React$Component) {
    _inherits(TiDivideOutline, _React$Component);

    function TiDivideOutline() {
        _classCallCheck(this, TiDivideOutline);

        return _possibleConstructorReturn(this, (TiDivideOutline.__proto__ || Object.getPrototypeOf(TiDivideOutline)).apply(this, arguments));
    }

    _createClass(TiDivideOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 14.2c-2.8 0-5-2.3-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z m0-6.7c-0.9 0-1.7 0.7-1.7 1.7s0.8 1.6 1.7 1.6 1.7-0.7 1.7-1.6-0.8-1.7-1.7-1.7z m0 28.3c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.3 5 5-2.2 5-5 5z m0-6.6c-0.9 0-1.7 0.7-1.7 1.6s0.8 1.7 1.7 1.7 1.7-0.7 1.7-1.7-0.8-1.6-1.7-1.6z m10-4.2h-20c-2.8 0-5-2.2-5-5s2.2-5 5-5h20c2.8 0 5 2.2 5 5s-2.2 5-5 5z m-20-6.7c-0.9 0-1.7 0.8-1.7 1.7s0.8 1.7 1.7 1.7h20c0.9 0 1.7-0.8 1.7-1.7s-0.8-1.7-1.7-1.7h-20z' })
                )
            );
        }
    }]);

    return TiDivideOutline;
}(React.Component);

exports.default = TiDivideOutline;
module.exports = exports['default'];