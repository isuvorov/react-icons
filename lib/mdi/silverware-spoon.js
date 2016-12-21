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

var MdiSilverwareSpoon = function (_React$Component) {
    _inherits(MdiSilverwareSpoon, _React$Component);

    function MdiSilverwareSpoon() {
        _classCallCheck(this, MdiSilverwareSpoon);

        return _possibleConstructorReturn(this, (MdiSilverwareSpoon.__proto__ || Object.getPrototypeOf(MdiSilverwareSpoon)).apply(this, arguments));
    }

    _createClass(MdiSilverwareSpoon, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.882,11.5293L 5.121,21.2913L 3.70701,19.8773L 13.468,10.1153C 12.756,8.59026 13.256,6.43827 14.848,4.84627C 16.761,2.93227 19.5,2.56927 20.964,4.03327C 22.429,5.49727 22.065,8.23627 20.151,10.1493C 18.56,11.7413 16.407,12.2423 14.882,11.5293 Z ' })
                )
            );
        }
    }]);

    return MdiSilverwareSpoon;
}(React.Component);

exports.default = MdiSilverwareSpoon;
module.exports = exports['default'];