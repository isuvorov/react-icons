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

var TiArrowDown = function (_React$Component) {
    _inherits(TiArrowDown, _React$Component);

    function TiArrowDown() {
        _classCallCheck(this, TiArrowDown);

        return _possibleConstructorReturn(this, (TiArrowDown.__proto__ || Object.getPrototypeOf(TiArrowDown)).apply(this, arguments));
    }

    _createClass(TiArrowDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.8 22.2c-0.6-0.7-1.7-0.7-2.3 0l-3.8 3.8v-12.7c0-0.9-0.8-1.6-1.7-1.6s-1.7 0.7-1.7 1.6v12.7l-3.8-3.8c-0.6-0.7-1.7-0.7-2.3 0s-0.7 1.7 0 2.3l7.8 7.9 7.8-7.9c0.7-0.6 0.7-1.7 0-2.3z' })
                )
            );
        }
    }]);

    return TiArrowDown;
}(React.Component);

exports.default = TiArrowDown;
module.exports = exports['default'];