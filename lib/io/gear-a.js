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

var IoGearA = function (_React$Component) {
    _inherits(IoGearA, _React$Component);

    function IoGearA() {
        _classCallCheck(this, IoGearA);

        return _possibleConstructorReturn(this, (IoGearA.__proto__ || Object.getPrototypeOf(IoGearA)).apply(this, arguments));
    }

    _createClass(IoGearA, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.1 20c0 1.9 1.2 3.4 2.9 4.4-0.3 1-0.8 2-1.2 2.9-2-0.4-3.6 0.3-4.9 1.6s-1.7 2.9-1.2 4.9c-1 0.4-2 0.9-3 1.2-1-1.7-2.8-2.9-4.7-2.9s-3.7 1.2-4.7 2.9c-1-0.3-2.1-0.8-3-1.2 0.4-2 0.1-3.6-1.2-4.9s-2.9-1.6-4.9-1.2c-0.4-0.9-0.9-2-1.2-3 1.7-1 2.9-2.8 2.9-4.7s-1.2-3.4-2.9-4.4c0.3-1 0.7-2 1.3-2.9 1.9 0.4 3.5-0.3 4.8-1.6s1.6-2.9 1.2-4.9c0.9-0.4 2-0.9 3-1.2 1 1.7 2.8 2.9 4.7 2.9s3.7-1.2 4.7-2.9c1 0.3 2.1 0.8 3 1.3-0.4 1.9-0.1 3.5 1.2 4.8s2.9 2 4.8 1.6c0.5 0.9 1 1.9 1.3 2.9-1.7 1-2.9 2.5-2.9 4.4z m-12.1 7.7c4.2 0 7.7-3.5 7.7-7.7s-3.5-7.7-7.7-7.7-7.7 3.5-7.7 7.7 3.5 7.7 7.7 7.7z' })
                )
            );
        }
    }]);

    return IoGearA;
}(React.Component);

exports.default = IoGearA;
module.exports = exports['default'];