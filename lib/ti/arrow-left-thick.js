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

var TiArrowLeftThick = function (_React$Component) {
    _inherits(TiArrowLeftThick, _React$Component);

    function TiArrowLeftThick() {
        _classCallCheck(this, TiArrowLeftThick);

        return _possibleConstructorReturn(this, (TiArrowLeftThick.__proto__ || Object.getPrototypeOf(TiArrowLeftThick)).apply(this, arguments));
    }

    _createClass(TiArrowLeftThick, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 18.3h-12.1l2.7-2.6c1.3-1.3 1.3-3.4 0-4.7-1.3-1.3-3.4-1.3-4.7 0l-10.7 10.7 10.7 10.7c0.6 0.6 1.5 0.9 2.3 0.9s1.7-0.3 2.4-0.9c1.3-1.3 1.3-3.5 0-4.8l-2.7-2.6h12.1c1.8 0 3.3-1.5 3.3-3.3 0-1.9-1.5-3.4-3.3-3.4z' })
                )
            );
        }
    }]);

    return TiArrowLeftThick;
}(React.Component);

exports.default = TiArrowLeftThick;
module.exports = exports['default'];