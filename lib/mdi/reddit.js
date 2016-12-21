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

var MdiReddit = function (_React$Component) {
    _inherits(MdiReddit, _React$Component);

    function MdiReddit() {
        _classCallCheck(this, MdiReddit);

        return _possibleConstructorReturn(this, (MdiReddit.__proto__ || Object.getPrototypeOf(MdiReddit)).apply(this, arguments));
    }

    _createClass(MdiReddit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 22,11.5C 22,10.1 20.9,9 19.5,9C 18.9,9 18.3,9.2 17.9,9.6C 16.4,8.7 14.6,8.1 12.5,8L 13.6,4L 17,5C 17,6.1 17.9,7 19,7C 20.1,7 21,6.1 21,5C 21,3.9 20.1,3 19,3C 18.3,3 17.6,3.4 17.3,4L 13.3,3C 13,2.9 12.8,3.1 12.7,3.4L 11.5,8C 9.5,8.1 7.6,8.7 6.1,9.6C 5.7,9.2 5.1,9 4.5,9C 3.1,9 2,10.1 2,11.5C 2,12.4 2.4,13.1 3.1,13.6L 3,14.5C 3,18.1 7,21 12,21C 17,21 21,18.1 21,14.5L 20.9,13.6C 21.6,13.1 22,12.4 22,11.5 Z M 9,11.8C 9.7,11.8 10.2,12.4 10.2,13C 10.2,13.6 9.7,14.2 9,14.2C 8.3,14.2 7.8,13.7 7.8,13C 7.8,12.3 8.3,11.8 9,11.8 Z M 15.8,17.2C 14,18.3 10,18.3 8.2,17.2C 8,17 7.9,16.7 8.1,16.5C 8.3,16.3 8.6,16.2 8.8,16.4C 10,17.3 14,17.3 15.2,16.4C 15.4,16.2 15.7,16.3 15.9,16.5C 16.1,16.7 16,17 15.8,17.2 Z M 15,14.2C 14.3,14.2 13.8,13.6 13.8,13C 13.8,12.3 14.4,11.8 15,11.8C 15.7,11.8 16.2,12.4 16.2,13C 16.2,13.7 15.7,14.2 15,14.2 Z ' })
                )
            );
        }
    }]);

    return MdiReddit;
}(React.Component);

exports.default = MdiReddit;
module.exports = exports['default'];