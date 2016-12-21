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

var MdCardTravel = function (_React$Component) {
    _inherits(MdCardTravel, _React$Component);

    function MdCardTravel() {
        _classCallCheck(this, MdCardTravel);

        return _possibleConstructorReturn(this, (MdCardTravel.__proto__ || Object.getPrototypeOf(MdCardTravel)).apply(this, arguments));
    }

    _createClass(MdCardTravel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 23.4v-10h-5v3.2h-3.4v-3.2h-10v3.2h-3.4v-3.2h-5v10h26.8z m0 8.2v-3.2h-26.8v3.2h26.8z m-18.4-25v3.4h10v-3.4h-10z m18.4 3.4c1.8 0 3.2 1.5 3.2 3.4v18.2c0 1.9-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.5-3.2-3.4v-18.2c0-1.9 1.4-3.4 3.2-3.4h5v-3.4c0-1.8 1.5-3.2 3.4-3.2h10c1.9 0 3.4 1.4 3.4 3.2v3.4h5z' })
                )
            );
        }
    }]);

    return MdCardTravel;
}(React.Component);

exports.default = MdCardTravel;
module.exports = exports['default'];