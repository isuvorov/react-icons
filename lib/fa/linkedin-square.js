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

var FaLinkedinSquare = function (_React$Component) {
    _inherits(FaLinkedinSquare, _React$Component);

    function FaLinkedinSquare() {
        _classCallCheck(this, FaLinkedinSquare);

        return _possibleConstructorReturn(this, (FaLinkedinSquare.__proto__ || Object.getPrototypeOf(FaLinkedinSquare)).apply(this, arguments));
    }

    _createClass(FaLinkedinSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.3 31.6h5.1v-15.5h-5.1v15.5z m5.5-20.3q0-1.2-0.8-1.9t-2.1-0.8-2.1 0.8-0.8 1.9q0 1.1 0.8 1.9t2 0.8h0.1q1.3 0 2.1-0.8t0.8-1.9z m13 20.3h5.2v-8.9q0-3.5-1.6-5.2t-4.3-1.8q-3.1 0-4.7 2.6h0v-2.2h-5.1q0 1.4 0 15.5h5.1v-8.7q0-0.8 0.2-1.2 0.3-0.8 1-1.4t1.7-0.5q2.5 0 2.5 3.5v8.3z m10.5-22.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaLinkedinSquare;
}(React.Component);

exports.default = FaLinkedinSquare;
module.exports = exports['default'];