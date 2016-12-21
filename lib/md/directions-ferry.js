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

var MdDirectionsFerry = function (_React$Component) {
    _inherits(MdDirectionsFerry, _React$Component);

    function MdDirectionsFerry() {
        _classCallCheck(this, MdDirectionsFerry);

        return _possibleConstructorReturn(this, (MdDirectionsFerry.__proto__ || Object.getPrototypeOf(MdDirectionsFerry)).apply(this, arguments));
    }

    _createClass(MdDirectionsFerry, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10 10v6.6l10-3.2 10 3.2v-6.6h-20z m-3.4 21.6l-3.2-11.1q-0.5-1.5 1.1-2.1l2.1-0.7v-7.7q0-1.3 1.1-2.3t2.3-1.1h5v-5h10v5h5q1.3 0 2.3 1.1t1.1 2.3v7.7l2.1 0.7q1.6 0.6 1.1 2.1l-3.2 11.1h0q-3.9 0-6.8-3.2-2.8 3.2-6.6 3.2t-6.6-3.2q-2.9 3.2-6.8 3.2h0z m26.8 3.4h3.2v3.4h-3.2q-3.6 0-6.8-1.7-6.6 3.5-13.2 0-3.2 1.7-6.8 1.7h-3.2v-3.4h3.2q3.6 0 6.8-2.2 3 2.1 6.6 2.1t6.6-2.1q3.2 2.2 6.8 2.2z' })
                )
            );
        }
    }]);

    return MdDirectionsFerry;
}(React.Component);

exports.default = MdDirectionsFerry;
module.exports = exports['default'];