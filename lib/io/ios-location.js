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

var IoIosLocation = function (_React$Component) {
    _inherits(IoIosLocation, _React$Component);

    function IoIosLocation() {
        _classCallCheck(this, IoIosLocation);

        return _possibleConstructorReturn(this, (IoIosLocation.__proto__ || Object.getPrototypeOf(IoIosLocation)).apply(this, arguments));
    }

    _createClass(IoIosLocation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 2.5c6.2 0 11.2 5 11.2 11.3 0 8.7-11.2 23.7-11.2 23.7s-11.3-15-11.3-23.7c0-6.3 5-11.3 11.3-11.3z m0 14.9c2 0 3.6-1.6 3.6-3.6s-1.6-3.7-3.6-3.7-3.7 1.6-3.7 3.7 1.6 3.6 3.7 3.6z' })
                )
            );
        }
    }]);

    return IoIosLocation;
}(React.Component);

exports.default = IoIosLocation;
module.exports = exports['default'];