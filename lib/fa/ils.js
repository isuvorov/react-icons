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

var FaIls = function (_React$Component) {
    _inherits(FaIls, _React$Component);

    function FaIls() {
        _classCallCheck(this, FaIls);

        return _possibleConstructorReturn(this, (FaIls.__proto__ || Object.getPrototypeOf(FaIls)).apply(this, arguments));
    }

    _createClass(FaIls, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 13.9v11.1q0 0.3-0.2 0.5t-0.5 0.2h-3.5q-0.4 0-0.6-0.2t-0.2-0.5v-11.1q0-2.5-1.7-4.3t-4.3-1.7h-6.1v25.7q0 0.3-0.2 0.5t-0.5 0.2h-3.6q-0.3 0-0.5-0.2t-0.2-0.5v-30q0-0.3 0.2-0.5t0.5-0.2h10.4q3 0 5.5 1.4t4.1 4.1 1.4 5.5z m8.6-10.3v19.6q0 3-1.5 5.6t-4 4-5.6 1.5h-10.3q-0.3 0-0.5-0.2t-0.2-0.5v-21.5q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5v17.2h6q2.5 0 4.3-1.8t1.8-4.3v-19.6q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5z' })
                )
            );
        }
    }]);

    return FaIls;
}(React.Component);

exports.default = FaIls;
module.exports = exports['default'];