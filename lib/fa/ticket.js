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

var FaTicket = function (_React$Component) {
    _inherits(FaTicket, _React$Component);

    function FaTicket() {
        _classCallCheck(this, FaTicket);

        return _possibleConstructorReturn(this, (FaTicket.__proto__ || Object.getPrototypeOf(FaTicket)).apply(this, arguments));
    }

    _createClass(FaTicket, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.9 10.1l7 7-12.8 12.8-7-7z m-4.8 21.8l13.8-13.8q0.5-0.4 0.5-1t-0.5-1l-8-8q-0.4-0.4-1-0.4t-1 0.4l-13.8 13.8q-0.5 0.4-0.5 1t0.5 1l8 8q0.4 0.4 1 0.4t1-0.4z m19.9-14.2l-20.3 20.3q-0.8 0.8-2 0.8t-2-0.8l-2.8-2.8q1.2-1.3 1.2-3.1t-1.2-3-3-1.2-3.1 1.2l-2.8-2.8q-0.8-0.8-0.8-2t0.8-2l20.3-20.3q0.8-0.8 2-0.8t2 0.8l2.8 2.8q-1.2 1.3-1.2 3.1t1.2 3 3 1.2 3.1-1.2l2.8 2.8q0.8 0.8 0.8 2t-0.8 2z' })
                )
            );
        }
    }]);

    return FaTicket;
}(React.Component);

exports.default = FaTicket;
module.exports = exports['default'];