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

var MdLibraryAdd = function (_React$Component) {
    _inherits(MdLibraryAdd, _React$Component);

    function MdLibraryAdd() {
        _classCallCheck(this, MdLibraryAdd);

        return _possibleConstructorReturn(this, (MdLibraryAdd.__proto__ || Object.getPrototypeOf(MdLibraryAdd)).apply(this, arguments));
    }

    _createClass(MdLibraryAdd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 18.4v-3.4h-6.6v-6.6h-3.4v6.6h-6.6v3.4h6.6v6.6h3.4v-6.6h6.6z m1.8-15q1.3 0 2.3 0.9t0.9 2.3v20q0 1.4-0.9 2.4t-2.3 1h-20q-1.4 0-2.4-1t-1-2.4v-20q0-1.3 1-2.3t2.4-0.9h20z m-26.8 6.6v23.4h23.4v3.2h-23.4q-1.3 0-2.3-0.9t-0.9-2.3v-23.4h3.2z' })
                )
            );
        }
    }]);

    return MdLibraryAdd;
}(React.Component);

exports.default = MdLibraryAdd;
module.exports = exports['default'];