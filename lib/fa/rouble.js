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

var FaRouble = function (_React$Component) {
    _inherits(FaRouble, _React$Component);

    function FaRouble() {
        _classCallCheck(this, FaRouble);

        return _possibleConstructorReturn(this, (FaRouble.__proto__ || Object.getPrototypeOf(FaRouble)).apply(this, arguments));
    }

    _createClass(FaRouble, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.8 12.6q0-2.2-1.5-3.6t-3.8-1.4h-7.1v10h7.1q2.4 0 3.8-1.4t1.5-3.6z m5.3 0q0 4.3-2.9 7t-7.2 2.8h-7.6v2.6h11.2q0.4 0 0.6 0.2t0.2 0.5v2.9q0 0.3-0.2 0.5t-0.6 0.2h-11.2v4.3q0 0.3-0.2 0.5t-0.5 0.2h-3.8q-0.3 0-0.5-0.2t-0.2-0.5v-4.3h-5q-0.3 0-0.5-0.2t-0.2-0.5v-2.9q0-0.3 0.2-0.5t0.5-0.2h5v-2.6h-5q-0.3 0-0.5-0.2t-0.2-0.6v-3.3q0-0.3 0.2-0.5t0.5-0.2h5v-14q0-0.3 0.2-0.5t0.5-0.2h12.1q4.4 0 7.2 2.7t2.9 7z' })
                )
            );
        }
    }]);

    return FaRouble;
}(React.Component);

exports.default = FaRouble;
module.exports = exports['default'];