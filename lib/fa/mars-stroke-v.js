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

var FaMarsStrokeV = function (_React$Component) {
    _inherits(FaMarsStrokeV, _React$Component);

    function FaMarsStrokeV() {
        _classCallCheck(this, FaMarsStrokeV);

        return _possibleConstructorReturn(this, (FaMarsStrokeV.__proto__ || Object.getPrototypeOf(FaMarsStrokeV)).apply(this, arguments));
    }

    _createClass(FaMarsStrokeV, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.8 14.4q4.8 0.5 8.1 4.2t3.3 8.5q0 3.8-1.9 6.9t-5.3 4.7-7.1 1.2q-3-0.3-5.5-2t-4.1-4.1-1.8-5.6q-0.2-3.5 1.2-6.5t4.2-5 6-2.3v-3h-3.5q-0.4 0-0.6-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.6-0.2h3.5v-3.7l-2 2q-0.2 0.2-0.5 0.2t-0.5-0.2l-1.1-1q-0.2-0.2-0.2-0.5t0.2-0.5l4.6-4.5q0.4-0.4 1-0.4t1 0.4l4.5 4.5q0.2 0.2 0.2 0.5t-0.2 0.5l-1.1 1q-0.2 0.2-0.4 0.2t-0.6-0.2l-2-2v3.7h3.6q0.3 0 0.5 0.2t0.2 0.5v1.4q0 0.3-0.2 0.5t-0.5 0.2h-3.6v3z m-1.4 22.7q4.1 0 7-2.9t3-7.1-3-7-7-3-7.1 3-2.9 7 2.9 7.1 7.1 2.9z' })
                )
            );
        }
    }]);

    return FaMarsStrokeV;
}(React.Component);

exports.default = FaMarsStrokeV;
module.exports = exports['default'];