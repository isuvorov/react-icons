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

var MdiRadioactive = function (_React$Component) {
    _inherits(MdiRadioactive, _React$Component);

    function MdiRadioactive() {
        _classCallCheck(this, MdiRadioactive);

        return _possibleConstructorReturn(this, (MdiRadioactive.__proto__ || Object.getPrototypeOf(MdiRadioactive)).apply(this, arguments));
    }

    _createClass(MdiRadioactive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,10C 13.1046,10 14,10.8954 14,12C 14,13.1046 13.1046,14 12,14C 10.8954,14 10,13.1046 10,12C 10,10.8954 10.8954,10 12,10 Z M 12,22C 10.0471,22 8.22487,21.4402 6.68517,20.4722L 10.0169,15.4746C 10.6014,15.8089 11.2784,16 12,16C 12.7216,16 13.3986,15.8089 13.9831,15.4746L 17.3148,20.4722C 15.7751,21.4402 13.9529,22 12,22 Z M 2,12C 2,7.85564 4.52111,4.3001 8.11335,2.7834L 10.3433,8.35816C 8.96091,8.98803 8,10.3818 8,12L 2,12 Z M 16,12C 16,10.3818 15.0391,8.98803 13.6567,8.35816L 15.8866,2.7834C 19.4789,4.3001 22,7.85563 22,12L 16,12 Z ' })
                )
            );
        }
    }]);

    return MdiRadioactive;
}(React.Component);

exports.default = MdiRadioactive;
module.exports = exports['default'];