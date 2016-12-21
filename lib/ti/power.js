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

var TiPower = function (_React$Component) {
    _inherits(TiPower, _React$Component);

    function TiPower() {
        _classCallCheck(this, TiPower);

        return _possibleConstructorReturn(this, (TiPower.__proto__ || Object.getPrototypeOf(TiPower)).apply(this, arguments));
    }

    _createClass(TiPower, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.2 31c-2.9 0-5.6-1.2-7.7-3.2-2-2.1-3.2-4.8-3.2-7.7s1.2-5.6 3.2-7.6c0.7-0.7 1.7-0.7 2.4 0s0.6 1.7 0 2.3c-1.5 1.4-2.2 3.3-2.2 5.3s0.7 3.9 2.2 5.3c1.4 1.4 3.3 2.2 5.3 2.2s3.9-0.8 5.3-2.2c1.4-1.4 2.2-3.3 2.2-5.3s-0.8-3.9-2.2-5.3c-0.7-0.6-0.7-1.7 0-2.3s1.7-0.7 2.3 0c2.1 2 3.2 4.7 3.2 7.6s-1.1 5.6-3.2 7.7c-2 2-4.7 3.2-7.6 3.2z m0-12.7c-1 0-1.7-0.7-1.7-1.6v-8.4c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6v8.4c0 0.9-0.7 1.6-1.6 1.6z' })
                )
            );
        }
    }]);

    return TiPower;
}(React.Component);

exports.default = TiPower;
module.exports = exports['default'];