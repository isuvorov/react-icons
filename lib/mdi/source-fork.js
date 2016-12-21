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

var MdiSourceFork = function (_React$Component) {
    _inherits(MdiSourceFork, _React$Component);

    function MdiSourceFork() {
        _classCallCheck(this, MdiSourceFork);

        return _possibleConstructorReturn(this, (MdiSourceFork.__proto__ || Object.getPrototypeOf(MdiSourceFork)).apply(this, arguments));
    }

    _createClass(MdiSourceFork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,2C 7.65685,2 9,3.34315 9,5C 9,6.2846 8.19259,7.38062 7.05758,7.80828C 7.14911,8.27472 7.38614,8.8321 8,9.625C 9,10.9167 11,12.8333 12,14.1667C 13,12.8333 15,10.9167 16,9.625C 16.6139,8.8321 16.8509,8.27472 16.9424,7.80828C 15.8074,7.38063 15,6.28461 15,5C 15,3.34315 16.3431,2.00001 18,2.00001C 19.6568,2.00001 21,3.34315 21,5C 21,6.32409 20.1422,7.44783 18.952,7.84581C 18.8679,8.37226 18.6365,8.98462 18,9.83333C 17,11.1667 15,13.0833 14,14.375C 13.3861,15.1679 13.1491,15.7253 13.0576,16.1917C 14.1926,16.6194 15,17.7154 15,19C 15,20.6569 13.6569,22 12,22C 10.3431,22 9,20.6569 9,19C 9,17.7154 9.8074,16.6194 10.9424,16.1917C 10.8509,15.7253 10.6139,15.1679 10,14.375C 9,13.0833 7,11.1667 6,9.83334C 5.36346,8.98462 5.1321,8.37226 5.04801,7.84581C 3.85781,7.44783 3,6.32409 3,5C 3,3.34315 4.34315,2 6,2 Z M 6,4.00001C 5.44771,4.00001 5,4.44772 5,5.00001C 5,5.55229 5.44771,6.00001 6,6.00001C 6.55228,6.00001 7,5.55229 7,5.00001C 7,4.44772 6.55228,4.00001 6,4.00001 Z M 18,4.00001C 17.4477,4.00001 17,4.44772 17,5C 17,5.55229 17.4477,6 18,6C 18.5523,6 19,5.55229 19,5C 19,4.44772 18.5523,4.00001 18,4.00001 Z M 12,18C 11.4477,18 11,18.4477 11,19C 11,19.5523 11.4477,20 12,20C 12.5523,20 13,19.5523 13,19C 13,18.4477 12.5523,18 12,18 Z ' })
                )
            );
        }
    }]);

    return MdiSourceFork;
}(React.Component);

exports.default = MdiSourceFork;
module.exports = exports['default'];